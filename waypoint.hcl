project = "mlcp"

app "mlcp-base" {
  labels = {
    "service" = "mlcp-base",
    "env"     = "dev"
  }

  build {
    use "pack" {}

    registry {
      use "gcp-artifact-registry" {
        tag   = "latest"
        project = "mlcp-gurgaon"
        repository = "main" 
      }
    }
  }

  deploy {
    use "google-cloud-run" {
      project  = "mlcp-gurgaon"
      location = "asia-south1"
      name = "main-app"

      port = 5000

      capacity {
        memory                     = 128
        cpu_count                  = 1
        max_requests_per_container = 10
        request_timeout            = 300
      }

      auto_scaling {
        max = 2
      }
    }
  }

  release {
    use "google-cloud-run" {}
  }
}


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from '../../../supabase';

type Data = {
    slots?: number;
    error?: string;
};

const getAddonsGenerator = (client: typeof supabase) => {
    return async () => {
        const { data, error } = await client
            .from('Service')
            .select(`
            name,
            description,
            timeRequired,
            cost,
            carParkLimitPerHour,
            enabled,
            slug
        `)
            .neq('slug', 'parkingSlot')
            .eq('enabled', true)
            .gt('carParkLimitPerHour', 0);
        if (error) {
            throw new Error('Could not fetch add-on data');
        }
        return data;
    }
}

const getSlots = getAddonsGenerator(supabase);

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const slots = await getSlots();
        return res.status(200).json({
            slots: slots[0].carParkLimitPerHour,
        })
    } catch (e) {
        const err = e as Error;
        return res.status(500).json({
            error: err.message,
        })
    }
}

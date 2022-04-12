// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from '../../../supabase';

type Data = {
    slots?: number;
    error?: string;
};

const getBookingDetailGenerator = (client: typeof supabase) => {
    return async (checkinId: number, userId: number) => {
        const { data, error } = await client
            .from('UserCheckinService')
            .select(`
                uuid,
                expectedCheckinTime,
                expectCheckoutTime,
                actualCheckinTime,
                actualCheckoutTime,
                enabled,
                userCheckinServices:UserCheckinService(
                    id,
                    service:Service(
                        name,
                        description,
                        slug
                    )
                )
            `)
            .eq('uuid', userId)
            .eq('UserCheckinService.id', checkinId);
        if (error) {
            throw new Error('Could not fetch specific booking details!')
        }
        return data;
    }
}

const getBooking = getBookingDetailGenerator(supabase);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const slots = await getBooking(req.body.checkinId, req.body.userId);
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

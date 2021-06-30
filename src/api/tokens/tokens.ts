import { Request, Response } from "express";
import { getTokenByAddress } from "../../utils";
import { return200, return400, return500 } from "../../utils/response";
import { getAddress } from "@ethersproject/address";

export default async function (req: Request, res: Response): Promise<void> {
  if (
    !req.params.address ||
    !req.params.address.match(/^0x[0-9a-fA-F]{40}$/)
  ) {
    return400(res, "Invalid address");
    return;
  }

  try {
    const address = getAddress(req.params.address);
    const token = await getTokenByAddress(address.toLowerCase());

    return200(res, {
      updated_at: new Date().getTime(),
      data: {
        name: token?.name,
        symbol: token?.symbol,
        price: token?.derivedUSD,
        price_BNB: token?.derivedBNB,
      },
    });
  } catch (error) {
    return500(res, error);
  }
}

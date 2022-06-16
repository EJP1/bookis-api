import { Request, Response } from "express";
import * as FileService from "../services/fileService";

export async function getFiles(req: Request, res: Response): Promise<any> {
  try {
    const { path } = req.body;
    const data = await FileService.getFiles(path);

    return res.json({
      statusCode: 200,
      ok: true,
      data,
    });
  } catch (error) {
    return res.json({
      statusCode: 400,
      ok: false,
      error: "Something went wrong...",
    });
  }
}

export async function deleteFile(req: Request, res: Response): Promise<any> {
  try {
    const { path } = req.body;
    const data = await FileService.deleteFile(path);

    return res.json({
      statusCode: 200,
      ok: true,
      data,
    });
  } catch (error) {
    return res.json({
      statusCode: 400,
      ok: false,
      error: "Something went wrong...",
    });
  }
}

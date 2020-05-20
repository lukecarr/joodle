import { Client } from "./client";

const handleResponse = async (body: unknown): Promise<unknown> => {
  if ((body as any).exception) {
    return Promise.reject(body);
  }
  return body;
};

export default abstract class Module {
  protected client: Client;

  protected constructor(client: Client) {
    this.client = client;
  }

  protected async get(
    wsfunction: string,
    searchParams?: any
  ): Promise<unknown> {
    const { body } = await this.client.got.get("", {
      searchParams: {
        wsfunction,
        ...searchParams,
      },
      responseType: "json",
    });

    return handleResponse(body);
  }
}

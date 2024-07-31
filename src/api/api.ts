/* tslint:disable */
/* eslint-disable */
import Hero from "./Hero";
import * as runtime from "./runtime";

export class Api extends runtime.BaseAPI {
  async heroesGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Hero>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/all.json`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    console.log(response);
    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map());
  }

  async heroesGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Hero>> {
    const response = await this.heroesGetRaw(initOverrides);
    return await response.value();
  }
}

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavormapMaxFieldsBase
 * auto generated base class for the model PokemonV2BerryflavormapMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const PokemonV2BerryflavormapMaxFieldsModelBase = ModelBase
  .named('PokemonV2BerryflavormapMaxFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavormap_max_fields"), "pokemon_v2_berryflavormap_max_fields"),
    berry_flavor_id: types.union(types.undefined, types.null, types.integer),
    berry_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.null, types.integer),
    potency: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavormapMaxFieldsModelSelector extends QueryBuilder {
  get berry_flavor_id() { return this.__attr(`berry_flavor_id`) }
  get berry_id() { return this.__attr(`berry_id`) }
  get id() { return this.__attr(`id`) }
  get potency() { return this.__attr(`potency`) }
}
export function selectFromPokemonV2BerryflavormapMaxFields() {
  return new PokemonV2BerryflavormapMaxFieldsModelSelector()
}

export const pokemonV2BerryflavormapMaxFieldsModelPrimitives = selectFromPokemonV2BerryflavormapMaxFields().berry_flavor_id.berry_id.potency

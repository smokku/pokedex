/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffectVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffectVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemflingeffectVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffectVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffect_var_samp_fields"), "pokemon_v2_itemflingeffect_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffectVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2ItemflingeffectVarSampFields() {
  return new PokemonV2ItemflingeffectVarSampFieldsModelSelector()
}

export const pokemonV2ItemflingeffectVarSampFieldsModelPrimitives = selectFromPokemonV2ItemflingeffectVarSampFields()

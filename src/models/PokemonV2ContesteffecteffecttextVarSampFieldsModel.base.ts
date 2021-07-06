/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ContesteffecteffecttextVarSampFieldsBase
 * auto generated base class for the model PokemonV2ContesteffecteffecttextVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesteffecteffecttextVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ContesteffecteffecttextVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_contesteffecteffecttext_var_samp_fields"), "pokemon_v2_contesteffecteffecttext_var_samp_fields"),
    contest_effect_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector extends QueryBuilder {
  get contest_effect_id() { return this.__attr(`contest_effect_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ContesteffecteffecttextVarSampFields() {
  return new PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector()
}

export const pokemonV2ContesteffecteffecttextVarSampFieldsModelPrimitives = selectFromPokemonV2ContesteffecteffecttextVarSampFields().contest_effect_id.language_id

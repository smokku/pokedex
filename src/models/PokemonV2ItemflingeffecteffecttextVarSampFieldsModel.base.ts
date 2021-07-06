/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemflingeffecteffecttextVarSampFieldsBase
 * auto generated base class for the model PokemonV2ItemflingeffecteffecttextVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemflingeffecteffecttextVarSampFieldsModelBase = ModelBase
  .named('PokemonV2ItemflingeffecteffecttextVarSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemflingeffecteffecttext_var_samp_fields"), "pokemon_v2_itemflingeffecteffecttext_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    item_fling_effect_id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get item_fling_effect_id() { return this.__attr(`item_fling_effect_id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2ItemflingeffecteffecttextVarSampFields() {
  return new PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector()
}

export const pokemonV2ItemflingeffecteffecttextVarSampFieldsModelPrimitives = selectFromPokemonV2ItemflingeffecteffecttextVarSampFields().item_fling_effect_id.language_id

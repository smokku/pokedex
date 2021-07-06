/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilitynameStddevSampFieldsBase
 * auto generated base class for the model PokemonV2AbilitynameStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilitynameStddevSampFieldsModelBase = ModelBase
  .named('PokemonV2AbilitynameStddevSampFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityname_stddev_samp_fields"), "pokemon_v2_abilityname_stddev_samp_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilitynameStddevSampFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilitynameStddevSampFields() {
  return new PokemonV2AbilitynameStddevSampFieldsModelSelector()
}

export const pokemonV2AbilitynameStddevSampFieldsModelPrimitives = selectFromPokemonV2AbilitynameStddevSampFields().ability_id.language_id

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueVarianceFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionvalueVarianceFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueVarianceFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_variance_fields"), "pokemon_v2_encounterconditionvalue_variance_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueVarianceFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueVarianceFields() {
  return new PokemonV2EncounterconditionvalueVarianceFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueVarianceFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueVarianceFields().encounter_condition_id

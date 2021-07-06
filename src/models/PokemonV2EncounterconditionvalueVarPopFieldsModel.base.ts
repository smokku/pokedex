/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2EncounterconditionvalueVarPopFieldsBase
 * auto generated base class for the model PokemonV2EncounterconditionvalueVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionvalueVarPopFieldsModelBase = ModelBase
  .named('PokemonV2EncounterconditionvalueVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_encounterconditionvalue_var_pop_fields"), "pokemon_v2_encounterconditionvalue_var_pop_fields"),
    encounter_condition_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2EncounterconditionvalueVarPopFieldsModelSelector extends QueryBuilder {
  get encounter_condition_id() { return this.__attr(`encounter_condition_id`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromPokemonV2EncounterconditionvalueVarPopFields() {
  return new PokemonV2EncounterconditionvalueVarPopFieldsModelSelector()
}

export const pokemonV2EncounterconditionvalueVarPopFieldsModelPrimitives = selectFromPokemonV2EncounterconditionvalueVarPopFields().encounter_condition_id

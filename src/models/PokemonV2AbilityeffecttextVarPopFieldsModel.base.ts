/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PokemonV2AbilityeffecttextVarPopFieldsBase
 * auto generated base class for the model PokemonV2AbilityeffecttextVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilityeffecttextVarPopFieldsModelBase = ModelBase
  .named('PokemonV2AbilityeffecttextVarPopFields')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_abilityeffecttext_var_pop_fields"), "pokemon_v2_abilityeffecttext_var_pop_fields"),
    ability_id: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.number),
    language_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2AbilityeffecttextVarPopFieldsModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get language_id() { return this.__attr(`language_id`) }
}
export function selectFromPokemonV2AbilityeffecttextVarPopFields() {
  return new PokemonV2AbilityeffecttextVarPopFieldsModelSelector()
}

export const pokemonV2AbilityeffecttextVarPopFieldsModelPrimitives = selectFromPokemonV2AbilityeffecttextVarPopFields().ability_id.language_id

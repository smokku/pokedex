/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2AbilityModel, PokemonV2AbilityModelType } from "./PokemonV2AbilityModel"
import { PokemonV2AbilityModelSelector } from "./PokemonV2AbilityModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonabilityBase
 * auto generated base class for the model PokemonV2PokemonabilityModel.
 *
 * columns and relationships of "pokemon_v2_pokemonability"
 */
export const PokemonV2PokemonabilityModelBase = ModelBase
  .named('PokemonV2Pokemonability')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemonability"), "pokemon_v2_pokemonability"),
    ability_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    is_hidden: types.union(types.undefined, types.boolean),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_ability: types.union(types.undefined, types.null, types.late((): any => PokemonV2AbilityModel)),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    slot: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonabilityModelSelector extends QueryBuilder {
  get ability_id() { return this.__attr(`ability_id`) }
  get id() { return this.__attr(`id`) }
  get is_hidden() { return this.__attr(`is_hidden`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  pokemon_v2_ability(builder?: string | PokemonV2AbilityModelSelector | ((selector: PokemonV2AbilityModelSelector) => PokemonV2AbilityModelSelector)) { return this.__child(`pokemon_v2_ability`, PokemonV2AbilityModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
}
export function selectFromPokemonV2Pokemonability() {
  return new PokemonV2PokemonabilityModelSelector()
}

export const pokemonV2PokemonabilityModelPrimitives = selectFromPokemonV2Pokemonability().ability_id.is_hidden.pokemon_id.slot

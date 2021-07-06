/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2GenerationModel, PokemonV2GenerationModelType } from "./PokemonV2GenerationModel"
import { PokemonV2GenerationModelSelector } from "./PokemonV2GenerationModel.base"
import { PokemonV2PokemonModel, PokemonV2PokemonModelType } from "./PokemonV2PokemonModel"
import { PokemonV2PokemonModelSelector } from "./PokemonV2PokemonModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemontypepastBase
 * auto generated base class for the model PokemonV2PokemontypepastModel.
 *
 * columns and relationships of "pokemon_v2_pokemontypepast"
 */
export const PokemonV2PokemontypepastModelBase = ModelBase
  .named('PokemonV2Pokemontypepast')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemontypepast"), "pokemon_v2_pokemontypepast"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    pokemon_id: types.union(types.undefined, types.null, types.integer),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.late((): any => PokemonV2GenerationModel)),
    /** An object relationship */
    pokemon_v2_pokemon: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonModel)),
    /** An object relationship */
    pokemon_v2_type: types.union(types.undefined, types.null, types.late((): any => PokemonV2TypeModel)),
    slot: types.union(types.undefined, types.integer),
    type_id: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemontypepastModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get pokemon_id() { return this.__attr(`pokemon_id`) }
  get slot() { return this.__attr(`slot`) }
  get type_id() { return this.__attr(`type_id`) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_pokemon(builder?: string | PokemonV2PokemonModelSelector | ((selector: PokemonV2PokemonModelSelector) => PokemonV2PokemonModelSelector)) { return this.__child(`pokemon_v2_pokemon`, PokemonV2PokemonModelSelector, builder) }
  pokemon_v2_type(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_type`, PokemonV2TypeModelSelector, builder) }
}
export function selectFromPokemonV2Pokemontypepast() {
  return new PokemonV2PokemontypepastModelSelector()
}

export const pokemonV2PokemontypepastModelPrimitives = selectFromPokemonV2Pokemontypepast().generation_id.pokemon_id.slot.type_id

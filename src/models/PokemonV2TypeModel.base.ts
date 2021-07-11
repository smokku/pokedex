/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemontypeModel, PokemonV2PokemontypeModelType } from "./PokemonV2PokemontypeModel"
import { PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2TypeBase
 * auto generated base class for the model PokemonV2TypeModel.
 *
 * columns and relationships of "pokemon_v2_type"
 */
export const PokemonV2TypeModelBase = ModelBase
  .named('PokemonV2Type')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_type"), "pokemon_v2_type"),
    generation_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    move_damage_class_id: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemonV2PokemonevolutionsByPartyTypeId: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemonV2PokemonevolutionsByPartyTypeId_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemonV2TypeefficaciesByTargetTypeId: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemonV2TypeefficaciesByTargetTypeId_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_berries: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_berries_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_generation: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_movechanges: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_movechanges_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_movedamageclass: types.union(types.undefined, types.null, types.frozen()),
    /** An array relationship */
    pokemon_v2_moves: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_moves_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonevolutions: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonevolutions_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonformtypes: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonformtypes_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemontypepasts: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemontypepasts_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemontypes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypeModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemontypes_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_typeefficacies: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_typeefficacies_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_typegameindices: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_typegameindices_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_typenames: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_typenames_aggregate: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2TypeModelSelector extends QueryBuilder {
  get generation_id() { return this.__attr(`generation_id`) }
  get id() { return this.__attr(`id`) }
  get move_damage_class_id() { return this.__attr(`move_damage_class_id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_pokemontypes(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontypes`, PokemonV2PokemontypeModelSelector, builder) }
}
export function selectFromPokemonV2Type() {
  return new PokemonV2TypeModelSelector()
}

export const pokemonV2TypeModelPrimitives = selectFromPokemonV2Type().generation_id.move_damage_class_id.name

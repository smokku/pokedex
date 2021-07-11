/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2PokemonspeciesModel, PokemonV2PokemonspeciesModelType } from "./PokemonV2PokemonspeciesModel"
import { PokemonV2PokemonspeciesModelSelector } from "./PokemonV2PokemonspeciesModel.base"
import { PokemonV2PokemontypeModel, PokemonV2PokemontypeModelType } from "./PokemonV2PokemontypeModel"
import { PokemonV2PokemontypeModelSelector } from "./PokemonV2PokemontypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2PokemonBase
 * auto generated base class for the model PokemonV2PokemonModel.
 *
 * columns and relationships of "pokemon_v2_pokemon"
 */
export const PokemonV2PokemonModelBase = ModelBase
  .named('PokemonV2Pokemon')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_pokemon"), "pokemon_v2_pokemon"),
    base_experience: types.union(types.undefined, types.null, types.integer),
    height: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    is_default: types.union(types.undefined, types.boolean),
    name: types.union(types.undefined, types.string),
    order: types.union(types.undefined, types.null, types.integer),
    pokemon_species_id: types.union(types.undefined, types.null, types.integer),
    /** An array relationship */
    pokemon_v2_encounters: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_encounters_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonabilities: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonabilities_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonforms: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonforms_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemongameindices: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemongameindices_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonitems: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonitems_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonmoves: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonmoves_aggregate: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    pokemon_v2_pokemonspecy: types.union(types.undefined, types.null, types.late((): any => PokemonV2PokemonspeciesModel)),
    /** An array relationship */
    pokemon_v2_pokemonsprites: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonsprites_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemonstats: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemonstats_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemontypepasts: types.union(types.undefined, types.array(types.frozen())),
    /** An aggregate relationship */
    pokemon_v2_pokemontypepasts_aggregate: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    pokemon_v2_pokemontypes: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemontypeModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemontypes_aggregate: types.union(types.undefined, types.frozen()),
    weight: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2PokemonModelSelector extends QueryBuilder {
  get base_experience() { return this.__attr(`base_experience`) }
  get height() { return this.__attr(`height`) }
  get id() { return this.__attr(`id`) }
  get is_default() { return this.__attr(`is_default`) }
  get name() { return this.__attr(`name`) }
  get order() { return this.__attr(`order`) }
  get pokemon_species_id() { return this.__attr(`pokemon_species_id`) }
  get weight() { return this.__attr(`weight`) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemontypes(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontypes`, PokemonV2PokemontypeModelSelector, builder) }
}
export function selectFromPokemonV2Pokemon() {
  return new PokemonV2PokemonModelSelector()
}

export const pokemonV2PokemonModelPrimitives = selectFromPokemonV2Pokemon().base_experience.height.is_default.name.order.pokemon_species_id.weight

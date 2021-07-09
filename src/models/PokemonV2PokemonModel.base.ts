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
  pokemon_v2_encounters(builder?: string | PokemonV2EncounterModelSelector | ((selector: PokemonV2EncounterModelSelector) => PokemonV2EncounterModelSelector)) { return this.__child(`pokemon_v2_encounters`, PokemonV2EncounterModelSelector, builder) }
  pokemon_v2_encounters_aggregate(builder?: string | PokemonV2EncounterAggregateModelSelector | ((selector: PokemonV2EncounterAggregateModelSelector) => PokemonV2EncounterAggregateModelSelector)) { return this.__child(`pokemon_v2_encounters_aggregate`, PokemonV2EncounterAggregateModelSelector, builder) }
  pokemon_v2_pokemonabilities(builder?: string | PokemonV2PokemonabilityModelSelector | ((selector: PokemonV2PokemonabilityModelSelector) => PokemonV2PokemonabilityModelSelector)) { return this.__child(`pokemon_v2_pokemonabilities`, PokemonV2PokemonabilityModelSelector, builder) }
  pokemon_v2_pokemonabilities_aggregate(builder?: string | PokemonV2PokemonabilityAggregateModelSelector | ((selector: PokemonV2PokemonabilityAggregateModelSelector) => PokemonV2PokemonabilityAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonabilities_aggregate`, PokemonV2PokemonabilityAggregateModelSelector, builder) }
  pokemon_v2_pokemonforms(builder?: string | PokemonV2PokemonformModelSelector | ((selector: PokemonV2PokemonformModelSelector) => PokemonV2PokemonformModelSelector)) { return this.__child(`pokemon_v2_pokemonforms`, PokemonV2PokemonformModelSelector, builder) }
  pokemon_v2_pokemonforms_aggregate(builder?: string | PokemonV2PokemonformAggregateModelSelector | ((selector: PokemonV2PokemonformAggregateModelSelector) => PokemonV2PokemonformAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonforms_aggregate`, PokemonV2PokemonformAggregateModelSelector, builder) }
  pokemon_v2_pokemongameindices(builder?: string | PokemonV2PokemongameindexModelSelector | ((selector: PokemonV2PokemongameindexModelSelector) => PokemonV2PokemongameindexModelSelector)) { return this.__child(`pokemon_v2_pokemongameindices`, PokemonV2PokemongameindexModelSelector, builder) }
  pokemon_v2_pokemongameindices_aggregate(builder?: string | PokemonV2PokemongameindexAggregateModelSelector | ((selector: PokemonV2PokemongameindexAggregateModelSelector) => PokemonV2PokemongameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemongameindices_aggregate`, PokemonV2PokemongameindexAggregateModelSelector, builder) }
  pokemon_v2_pokemonitems(builder?: string | PokemonV2PokemonitemModelSelector | ((selector: PokemonV2PokemonitemModelSelector) => PokemonV2PokemonitemModelSelector)) { return this.__child(`pokemon_v2_pokemonitems`, PokemonV2PokemonitemModelSelector, builder) }
  pokemon_v2_pokemonitems_aggregate(builder?: string | PokemonV2PokemonitemAggregateModelSelector | ((selector: PokemonV2PokemonitemAggregateModelSelector) => PokemonV2PokemonitemAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonitems_aggregate`, PokemonV2PokemonitemAggregateModelSelector, builder) }
  pokemon_v2_pokemonmoves(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmoves`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonmoves_aggregate(builder?: string | PokemonV2PokemonmoveAggregateModelSelector | ((selector: PokemonV2PokemonmoveAggregateModelSelector) => PokemonV2PokemonmoveAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonmoves_aggregate`, PokemonV2PokemonmoveAggregateModelSelector, builder) }
  pokemon_v2_pokemonspecy(builder?: string | PokemonV2PokemonspeciesModelSelector | ((selector: PokemonV2PokemonspeciesModelSelector) => PokemonV2PokemonspeciesModelSelector)) { return this.__child(`pokemon_v2_pokemonspecy`, PokemonV2PokemonspeciesModelSelector, builder) }
  pokemon_v2_pokemonsprites(builder?: string | PokemonV2PokemonspritesModelSelector | ((selector: PokemonV2PokemonspritesModelSelector) => PokemonV2PokemonspritesModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites`, PokemonV2PokemonspritesModelSelector, builder) }
  pokemon_v2_pokemonsprites_aggregate(builder?: string | PokemonV2PokemonspritesAggregateModelSelector | ((selector: PokemonV2PokemonspritesAggregateModelSelector) => PokemonV2PokemonspritesAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonsprites_aggregate`, PokemonV2PokemonspritesAggregateModelSelector, builder) }
  pokemon_v2_pokemonstats(builder?: string | PokemonV2PokemonstatModelSelector | ((selector: PokemonV2PokemonstatModelSelector) => PokemonV2PokemonstatModelSelector)) { return this.__child(`pokemon_v2_pokemonstats`, PokemonV2PokemonstatModelSelector, builder) }
  pokemon_v2_pokemonstats_aggregate(builder?: string | PokemonV2PokemonstatAggregateModelSelector | ((selector: PokemonV2PokemonstatAggregateModelSelector) => PokemonV2PokemonstatAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonstats_aggregate`, PokemonV2PokemonstatAggregateModelSelector, builder) }
  pokemon_v2_pokemontypepasts(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepasts`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_pokemontypepasts_aggregate(builder?: string | PokemonV2PokemontypepastAggregateModelSelector | ((selector: PokemonV2PokemontypepastAggregateModelSelector) => PokemonV2PokemontypepastAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypepasts_aggregate`, PokemonV2PokemontypepastAggregateModelSelector, builder) }
  pokemon_v2_pokemontypes(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontypes`, PokemonV2PokemontypeModelSelector, builder) }
  pokemon_v2_pokemontypes_aggregate(builder?: string | PokemonV2PokemontypeAggregateModelSelector | ((selector: PokemonV2PokemontypeAggregateModelSelector) => PokemonV2PokemontypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypes_aggregate`, PokemonV2PokemontypeAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Pokemon() {
  return new PokemonV2PokemonModelSelector()
}

export const pokemonV2PokemonModelPrimitives = selectFromPokemonV2Pokemon().base_experience.height.is_default.name.order.pokemon_species_id.weight

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
  pokemonV2PokemonevolutionsByPartyTypeId(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByPartyTypeId`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemonV2PokemonevolutionsByPartyTypeId_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemonV2PokemonevolutionsByPartyTypeId_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemonV2TypeefficaciesByTargetTypeId(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`pokemonV2TypeefficaciesByTargetTypeId`, PokemonV2TypeefficacyModelSelector, builder) }
  pokemonV2TypeefficaciesByTargetTypeId_aggregate(builder?: string | PokemonV2TypeefficacyAggregateModelSelector | ((selector: PokemonV2TypeefficacyAggregateModelSelector) => PokemonV2TypeefficacyAggregateModelSelector)) { return this.__child(`pokemonV2TypeefficaciesByTargetTypeId_aggregate`, PokemonV2TypeefficacyAggregateModelSelector, builder) }
  pokemon_v2_berries(builder?: string | PokemonV2BerryModelSelector | ((selector: PokemonV2BerryModelSelector) => PokemonV2BerryModelSelector)) { return this.__child(`pokemon_v2_berries`, PokemonV2BerryModelSelector, builder) }
  pokemon_v2_berries_aggregate(builder?: string | PokemonV2BerryAggregateModelSelector | ((selector: PokemonV2BerryAggregateModelSelector) => PokemonV2BerryAggregateModelSelector)) { return this.__child(`pokemon_v2_berries_aggregate`, PokemonV2BerryAggregateModelSelector, builder) }
  pokemon_v2_generation(builder?: string | PokemonV2GenerationModelSelector | ((selector: PokemonV2GenerationModelSelector) => PokemonV2GenerationModelSelector)) { return this.__child(`pokemon_v2_generation`, PokemonV2GenerationModelSelector, builder) }
  pokemon_v2_movechanges(builder?: string | PokemonV2MovechangeModelSelector | ((selector: PokemonV2MovechangeModelSelector) => PokemonV2MovechangeModelSelector)) { return this.__child(`pokemon_v2_movechanges`, PokemonV2MovechangeModelSelector, builder) }
  pokemon_v2_movechanges_aggregate(builder?: string | PokemonV2MovechangeAggregateModelSelector | ((selector: PokemonV2MovechangeAggregateModelSelector) => PokemonV2MovechangeAggregateModelSelector)) { return this.__child(`pokemon_v2_movechanges_aggregate`, PokemonV2MovechangeAggregateModelSelector, builder) }
  pokemon_v2_movedamageclass(builder?: string | PokemonV2MovedamageclassModelSelector | ((selector: PokemonV2MovedamageclassModelSelector) => PokemonV2MovedamageclassModelSelector)) { return this.__child(`pokemon_v2_movedamageclass`, PokemonV2MovedamageclassModelSelector, builder) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_pokemonevolutions(builder?: string | PokemonV2PokemonevolutionModelSelector | ((selector: PokemonV2PokemonevolutionModelSelector) => PokemonV2PokemonevolutionModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions`, PokemonV2PokemonevolutionModelSelector, builder) }
  pokemon_v2_pokemonevolutions_aggregate(builder?: string | PokemonV2PokemonevolutionAggregateModelSelector | ((selector: PokemonV2PokemonevolutionAggregateModelSelector) => PokemonV2PokemonevolutionAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonevolutions_aggregate`, PokemonV2PokemonevolutionAggregateModelSelector, builder) }
  pokemon_v2_pokemonformtypes(builder?: string | PokemonV2PokemonformtypeModelSelector | ((selector: PokemonV2PokemonformtypeModelSelector) => PokemonV2PokemonformtypeModelSelector)) { return this.__child(`pokemon_v2_pokemonformtypes`, PokemonV2PokemonformtypeModelSelector, builder) }
  pokemon_v2_pokemonformtypes_aggregate(builder?: string | PokemonV2PokemonformtypeAggregateModelSelector | ((selector: PokemonV2PokemonformtypeAggregateModelSelector) => PokemonV2PokemonformtypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonformtypes_aggregate`, PokemonV2PokemonformtypeAggregateModelSelector, builder) }
  pokemon_v2_pokemontypepasts(builder?: string | PokemonV2PokemontypepastModelSelector | ((selector: PokemonV2PokemontypepastModelSelector) => PokemonV2PokemontypepastModelSelector)) { return this.__child(`pokemon_v2_pokemontypepasts`, PokemonV2PokemontypepastModelSelector, builder) }
  pokemon_v2_pokemontypepasts_aggregate(builder?: string | PokemonV2PokemontypepastAggregateModelSelector | ((selector: PokemonV2PokemontypepastAggregateModelSelector) => PokemonV2PokemontypepastAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypepasts_aggregate`, PokemonV2PokemontypepastAggregateModelSelector, builder) }
  pokemon_v2_pokemontypes(builder?: string | PokemonV2PokemontypeModelSelector | ((selector: PokemonV2PokemontypeModelSelector) => PokemonV2PokemontypeModelSelector)) { return this.__child(`pokemon_v2_pokemontypes`, PokemonV2PokemontypeModelSelector, builder) }
  pokemon_v2_pokemontypes_aggregate(builder?: string | PokemonV2PokemontypeAggregateModelSelector | ((selector: PokemonV2PokemontypeAggregateModelSelector) => PokemonV2PokemontypeAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemontypes_aggregate`, PokemonV2PokemontypeAggregateModelSelector, builder) }
  pokemon_v2_typeefficacies(builder?: string | PokemonV2TypeefficacyModelSelector | ((selector: PokemonV2TypeefficacyModelSelector) => PokemonV2TypeefficacyModelSelector)) { return this.__child(`pokemon_v2_typeefficacies`, PokemonV2TypeefficacyModelSelector, builder) }
  pokemon_v2_typeefficacies_aggregate(builder?: string | PokemonV2TypeefficacyAggregateModelSelector | ((selector: PokemonV2TypeefficacyAggregateModelSelector) => PokemonV2TypeefficacyAggregateModelSelector)) { return this.__child(`pokemon_v2_typeefficacies_aggregate`, PokemonV2TypeefficacyAggregateModelSelector, builder) }
  pokemon_v2_typegameindices(builder?: string | PokemonV2TypegameindexModelSelector | ((selector: PokemonV2TypegameindexModelSelector) => PokemonV2TypegameindexModelSelector)) { return this.__child(`pokemon_v2_typegameindices`, PokemonV2TypegameindexModelSelector, builder) }
  pokemon_v2_typegameindices_aggregate(builder?: string | PokemonV2TypegameindexAggregateModelSelector | ((selector: PokemonV2TypegameindexAggregateModelSelector) => PokemonV2TypegameindexAggregateModelSelector)) { return this.__child(`pokemon_v2_typegameindices_aggregate`, PokemonV2TypegameindexAggregateModelSelector, builder) }
  pokemon_v2_typenames(builder?: string | PokemonV2TypenameModelSelector | ((selector: PokemonV2TypenameModelSelector) => PokemonV2TypenameModelSelector)) { return this.__child(`pokemon_v2_typenames`, PokemonV2TypenameModelSelector, builder) }
  pokemon_v2_typenames_aggregate(builder?: string | PokemonV2TypenameAggregateModelSelector | ((selector: PokemonV2TypenameAggregateModelSelector) => PokemonV2TypenameAggregateModelSelector)) { return this.__child(`pokemon_v2_typenames_aggregate`, PokemonV2TypenameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Type() {
  return new PokemonV2TypeModelSelector()
}

export const pokemonV2TypeModelPrimitives = selectFromPokemonV2Type().generation_id.move_damage_class_id.name

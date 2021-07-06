import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatAggregateFieldsModelBase } from "./PokemonV2PokemonhabitatAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatAggregateFieldsModel */
export interface PokemonV2PokemonhabitatAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatAggregateFieldsModel */
export { selectFromPokemonV2PokemonhabitatAggregateFields, pokemonV2PokemonhabitatAggregateFieldsModelPrimitives, PokemonV2PokemonhabitatAggregateFieldsModelSelector } from "./PokemonV2PokemonhabitatAggregateFieldsModel.base"

/**
 * PokemonV2PokemonhabitatAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonhabitat"
 */
export const PokemonV2PokemonhabitatAggregateFieldsModel = PokemonV2PokemonhabitatAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameAggregateFieldsModelBase } from "./PokemonV2PokemonhabitatnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameAggregateFieldsModel */
export interface PokemonV2PokemonhabitatnameAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameAggregateFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameAggregateFields, pokemonV2PokemonhabitatnameAggregateFieldsModelPrimitives, PokemonV2PokemonhabitatnameAggregateFieldsModelSelector } from "./PokemonV2PokemonhabitatnameAggregateFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonhabitatname"
 */
export const PokemonV2PokemonhabitatnameAggregateFieldsModel = PokemonV2PokemonhabitatnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

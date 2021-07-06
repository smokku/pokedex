import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityAvgFieldsModelBase } from "./PokemonV2PokemonabilityAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityAvgFieldsModel */
export interface PokemonV2PokemonabilityAvgFieldsModelType extends Instance<typeof PokemonV2PokemonabilityAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityAvgFieldsModel */
export { selectFromPokemonV2PokemonabilityAvgFields, pokemonV2PokemonabilityAvgFieldsModelPrimitives, PokemonV2PokemonabilityAvgFieldsModelSelector } from "./PokemonV2PokemonabilityAvgFieldsModel.base"

/**
 * PokemonV2PokemonabilityAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonabilityAvgFieldsModel = PokemonV2PokemonabilityAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

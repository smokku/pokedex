import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionMaxFieldsModelBase } from "./PokemonV2PokemonevolutionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionMaxFieldsModel */
export interface PokemonV2PokemonevolutionMaxFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionMaxFieldsModel */
export { selectFromPokemonV2PokemonevolutionMaxFields, pokemonV2PokemonevolutionMaxFieldsModelPrimitives, PokemonV2PokemonevolutionMaxFieldsModelSelector } from "./PokemonV2PokemonevolutionMaxFieldsModel.base"

/**
 * PokemonV2PokemonevolutionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonevolutionMaxFieldsModel = PokemonV2PokemonevolutionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

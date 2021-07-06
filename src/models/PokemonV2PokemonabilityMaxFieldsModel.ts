import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityMaxFieldsModelBase } from "./PokemonV2PokemonabilityMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityMaxFieldsModel */
export interface PokemonV2PokemonabilityMaxFieldsModelType extends Instance<typeof PokemonV2PokemonabilityMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityMaxFieldsModel */
export { selectFromPokemonV2PokemonabilityMaxFields, pokemonV2PokemonabilityMaxFieldsModelPrimitives, PokemonV2PokemonabilityMaxFieldsModelSelector } from "./PokemonV2PokemonabilityMaxFieldsModel.base"

/**
 * PokemonV2PokemonabilityMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonabilityMaxFieldsModel = PokemonV2PokemonabilityMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

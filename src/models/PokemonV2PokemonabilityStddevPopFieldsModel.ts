import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityStddevPopFieldsModelBase } from "./PokemonV2PokemonabilityStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityStddevPopFieldsModel */
export interface PokemonV2PokemonabilityStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonabilityStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityStddevPopFieldsModel */
export { selectFromPokemonV2PokemonabilityStddevPopFields, pokemonV2PokemonabilityStddevPopFieldsModelPrimitives, PokemonV2PokemonabilityStddevPopFieldsModelSelector } from "./PokemonV2PokemonabilityStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonabilityStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonabilityStddevPopFieldsModel = PokemonV2PokemonabilityStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

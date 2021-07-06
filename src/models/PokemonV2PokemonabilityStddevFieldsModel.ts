import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityStddevFieldsModelBase } from "./PokemonV2PokemonabilityStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityStddevFieldsModel */
export interface PokemonV2PokemonabilityStddevFieldsModelType extends Instance<typeof PokemonV2PokemonabilityStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityStddevFieldsModel */
export { selectFromPokemonV2PokemonabilityStddevFields, pokemonV2PokemonabilityStddevFieldsModelPrimitives, PokemonV2PokemonabilityStddevFieldsModelSelector } from "./PokemonV2PokemonabilityStddevFieldsModel.base"

/**
 * PokemonV2PokemonabilityStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonabilityStddevFieldsModel = PokemonV2PokemonabilityStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

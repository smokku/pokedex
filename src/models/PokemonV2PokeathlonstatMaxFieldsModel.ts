import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatMaxFieldsModelBase } from "./PokemonV2PokeathlonstatMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatMaxFieldsModel */
export interface PokemonV2PokeathlonstatMaxFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatMaxFieldsModel */
export { selectFromPokemonV2PokeathlonstatMaxFields, pokemonV2PokeathlonstatMaxFieldsModelPrimitives, PokemonV2PokeathlonstatMaxFieldsModelSelector } from "./PokemonV2PokeathlonstatMaxFieldsModel.base"

/**
 * PokemonV2PokeathlonstatMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokeathlonstatMaxFieldsModel = PokemonV2PokeathlonstatMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

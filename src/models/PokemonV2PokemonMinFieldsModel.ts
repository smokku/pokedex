import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonMinFieldsModelBase } from "./PokemonV2PokemonMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonMinFieldsModel */
export interface PokemonV2PokemonMinFieldsModelType extends Instance<typeof PokemonV2PokemonMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonMinFieldsModel */
export { selectFromPokemonV2PokemonMinFields, pokemonV2PokemonMinFieldsModelPrimitives, PokemonV2PokemonMinFieldsModelSelector } from "./PokemonV2PokemonMinFieldsModel.base"

/**
 * PokemonV2PokemonMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonMinFieldsModel = PokemonV2PokemonMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

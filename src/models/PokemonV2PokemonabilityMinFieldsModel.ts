import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityMinFieldsModelBase } from "./PokemonV2PokemonabilityMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityMinFieldsModel */
export interface PokemonV2PokemonabilityMinFieldsModelType extends Instance<typeof PokemonV2PokemonabilityMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityMinFieldsModel */
export { selectFromPokemonV2PokemonabilityMinFields, pokemonV2PokemonabilityMinFieldsModelPrimitives, PokemonV2PokemonabilityMinFieldsModelSelector } from "./PokemonV2PokemonabilityMinFieldsModel.base"

/**
 * PokemonV2PokemonabilityMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonabilityMinFieldsModel = PokemonV2PokemonabilityMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

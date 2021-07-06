import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodMinFieldsModelBase } from "./PokemonV2MovelearnmethodMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodMinFieldsModel */
export interface PokemonV2MovelearnmethodMinFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodMinFieldsModel */
export { selectFromPokemonV2MovelearnmethodMinFields, pokemonV2MovelearnmethodMinFieldsModelPrimitives, PokemonV2MovelearnmethodMinFieldsModelSelector } from "./PokemonV2MovelearnmethodMinFieldsModel.base"

/**
 * PokemonV2MovelearnmethodMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovelearnmethodMinFieldsModel = PokemonV2MovelearnmethodMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

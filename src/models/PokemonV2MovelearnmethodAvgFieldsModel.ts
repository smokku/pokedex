import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodAvgFieldsModelBase } from "./PokemonV2MovelearnmethodAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodAvgFieldsModel */
export interface PokemonV2MovelearnmethodAvgFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodAvgFieldsModel */
export { selectFromPokemonV2MovelearnmethodAvgFields, pokemonV2MovelearnmethodAvgFieldsModelPrimitives, PokemonV2MovelearnmethodAvgFieldsModelSelector } from "./PokemonV2MovelearnmethodAvgFieldsModel.base"

/**
 * PokemonV2MovelearnmethodAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovelearnmethodAvgFieldsModel = PokemonV2MovelearnmethodAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

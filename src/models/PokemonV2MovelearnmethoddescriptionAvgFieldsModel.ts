import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionAvgFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionAvgFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionAvgFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionAvgFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionAvgFields, pokemonV2MovelearnmethoddescriptionAvgFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionAvgFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionAvgFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovelearnmethoddescriptionAvgFieldsModel = PokemonV2MovelearnmethoddescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

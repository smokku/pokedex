import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionSumFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionSumFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionSumFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionSumFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionSumFields, pokemonV2MovelearnmethoddescriptionSumFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionSumFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionSumFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovelearnmethoddescriptionSumFieldsModel = PokemonV2MovelearnmethoddescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

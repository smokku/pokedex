import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionMinFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionMinFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionMinFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionMinFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionMinFields, pokemonV2MovelearnmethoddescriptionMinFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionMinFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionMinFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovelearnmethoddescriptionMinFieldsModel = PokemonV2MovelearnmethoddescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

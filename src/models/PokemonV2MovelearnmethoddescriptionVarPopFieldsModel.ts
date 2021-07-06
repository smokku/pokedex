import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionVarPopFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionVarPopFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionVarPopFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionVarPopFields, pokemonV2MovelearnmethoddescriptionVarPopFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionVarPopFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionVarPopFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovelearnmethoddescriptionVarPopFieldsModel = PokemonV2MovelearnmethoddescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

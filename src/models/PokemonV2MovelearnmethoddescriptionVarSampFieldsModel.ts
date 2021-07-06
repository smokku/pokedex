import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionVarSampFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionVarSampFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionVarSampFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionVarSampFields, pokemonV2MovelearnmethoddescriptionVarSampFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionVarSampFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionVarSampFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovelearnmethoddescriptionVarSampFieldsModel = PokemonV2MovelearnmethoddescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

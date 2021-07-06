import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionVarSampFieldsModelBase } from "./PokemonV2MovetargetdescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionVarSampFieldsModel */
export interface PokemonV2MovetargetdescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionVarSampFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionVarSampFields, pokemonV2MovetargetdescriptionVarSampFieldsModelPrimitives, PokemonV2MovetargetdescriptionVarSampFieldsModelSelector } from "./PokemonV2MovetargetdescriptionVarSampFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovetargetdescriptionVarSampFieldsModel = PokemonV2MovetargetdescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

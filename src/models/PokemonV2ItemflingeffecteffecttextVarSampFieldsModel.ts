import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextVarSampFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextVarSampFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextVarSampFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextVarSampFields, pokemonV2ItemflingeffecteffecttextVarSampFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextVarSampFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextVarSampFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemflingeffecteffecttextVarSampFieldsModel = PokemonV2ItemflingeffecteffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

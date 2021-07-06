import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextVarSampFieldsModelBase } from "./PokemonV2ItemeffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextVarSampFieldsModel */
export interface PokemonV2ItemeffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextVarSampFieldsModel */
export { selectFromPokemonV2ItemeffecttextVarSampFields, pokemonV2ItemeffecttextVarSampFieldsModelPrimitives, PokemonV2ItemeffecttextVarSampFieldsModelSelector } from "./PokemonV2ItemeffecttextVarSampFieldsModel.base"

/**
 * PokemonV2ItemeffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemeffecttextVarSampFieldsModel = PokemonV2ItemeffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

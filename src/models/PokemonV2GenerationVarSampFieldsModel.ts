import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationVarSampFieldsModelBase } from "./PokemonV2GenerationVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationVarSampFieldsModel */
export interface PokemonV2GenerationVarSampFieldsModelType extends Instance<typeof PokemonV2GenerationVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationVarSampFieldsModel */
export { selectFromPokemonV2GenerationVarSampFields, pokemonV2GenerationVarSampFieldsModelPrimitives, PokemonV2GenerationVarSampFieldsModelSelector } from "./PokemonV2GenerationVarSampFieldsModel.base"

/**
 * PokemonV2GenerationVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GenerationVarSampFieldsModel = PokemonV2GenerationVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

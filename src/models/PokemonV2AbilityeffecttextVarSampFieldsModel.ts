import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextVarSampFieldsModelBase } from "./PokemonV2AbilityeffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextVarSampFieldsModel */
export interface PokemonV2AbilityeffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextVarSampFieldsModel */
export { selectFromPokemonV2AbilityeffecttextVarSampFields, pokemonV2AbilityeffecttextVarSampFieldsModelPrimitives, PokemonV2AbilityeffecttextVarSampFieldsModelSelector } from "./PokemonV2AbilityeffecttextVarSampFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2AbilityeffecttextVarSampFieldsModel = PokemonV2AbilityeffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

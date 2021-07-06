import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameVarSampFieldsModelBase } from "./PokemonV2MovelearnmethodnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameVarSampFieldsModel */
export interface PokemonV2MovelearnmethodnameVarSampFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameVarSampFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameVarSampFields, pokemonV2MovelearnmethodnameVarSampFieldsModelPrimitives, PokemonV2MovelearnmethodnameVarSampFieldsModelSelector } from "./PokemonV2MovelearnmethodnameVarSampFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovelearnmethodnameVarSampFieldsModel = PokemonV2MovelearnmethodnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

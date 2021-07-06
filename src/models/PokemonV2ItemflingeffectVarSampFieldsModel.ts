import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectVarSampFieldsModelBase } from "./PokemonV2ItemflingeffectVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectVarSampFieldsModel */
export interface PokemonV2ItemflingeffectVarSampFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectVarSampFieldsModel */
export { selectFromPokemonV2ItemflingeffectVarSampFields, pokemonV2ItemflingeffectVarSampFieldsModelPrimitives, PokemonV2ItemflingeffectVarSampFieldsModelSelector } from "./PokemonV2ItemflingeffectVarSampFieldsModel.base"

/**
 * PokemonV2ItemflingeffectVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemflingeffectVarSampFieldsModel = PokemonV2ItemflingeffectVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

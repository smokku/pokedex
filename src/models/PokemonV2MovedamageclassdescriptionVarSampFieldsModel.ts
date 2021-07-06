import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionVarSampFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionVarSampFieldsModel */
export interface PokemonV2MovedamageclassdescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionVarSampFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionVarSampFields, pokemonV2MovedamageclassdescriptionVarSampFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionVarSampFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionVarSampFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovedamageclassdescriptionVarSampFieldsModel = PokemonV2MovedamageclassdescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

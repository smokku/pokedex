import { Instance } from "mobx-state-tree"
import { PokemonV2StatStddevFieldsModelBase } from "./PokemonV2StatStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatStddevFieldsModel */
export interface PokemonV2StatStddevFieldsModelType extends Instance<typeof PokemonV2StatStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatStddevFieldsModel */
export { selectFromPokemonV2StatStddevFields, pokemonV2StatStddevFieldsModelPrimitives, PokemonV2StatStddevFieldsModelSelector } from "./PokemonV2StatStddevFieldsModel.base"

/**
 * PokemonV2StatStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2StatStddevFieldsModel = PokemonV2StatStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

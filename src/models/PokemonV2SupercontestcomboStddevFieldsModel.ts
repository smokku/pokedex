import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboStddevFieldsModelBase } from "./PokemonV2SupercontestcomboStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboStddevFieldsModel */
export interface PokemonV2SupercontestcomboStddevFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboStddevFieldsModel */
export { selectFromPokemonV2SupercontestcomboStddevFields, pokemonV2SupercontestcomboStddevFieldsModelPrimitives, PokemonV2SupercontestcomboStddevFieldsModelSelector } from "./PokemonV2SupercontestcomboStddevFieldsModel.base"

/**
 * PokemonV2SupercontestcomboStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2SupercontestcomboStddevFieldsModel = PokemonV2SupercontestcomboStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboStddevPopFieldsModelBase } from "./PokemonV2SupercontestcomboStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboStddevPopFieldsModel */
export interface PokemonV2SupercontestcomboStddevPopFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboStddevPopFieldsModel */
export { selectFromPokemonV2SupercontestcomboStddevPopFields, pokemonV2SupercontestcomboStddevPopFieldsModelPrimitives, PokemonV2SupercontestcomboStddevPopFieldsModelSelector } from "./PokemonV2SupercontestcomboStddevPopFieldsModel.base"

/**
 * PokemonV2SupercontestcomboStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2SupercontestcomboStddevPopFieldsModel = PokemonV2SupercontestcomboStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

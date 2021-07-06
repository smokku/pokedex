import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetStddevPopFieldsModelBase } from "./PokemonV2MovetargetStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetStddevPopFieldsModel */
export interface PokemonV2MovetargetStddevPopFieldsModelType extends Instance<typeof PokemonV2MovetargetStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetStddevPopFieldsModel */
export { selectFromPokemonV2MovetargetStddevPopFields, pokemonV2MovetargetStddevPopFieldsModelPrimitives, PokemonV2MovetargetStddevPopFieldsModelSelector } from "./PokemonV2MovetargetStddevPopFieldsModel.base"

/**
 * PokemonV2MovetargetStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovetargetStddevPopFieldsModel = PokemonV2MovetargetStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

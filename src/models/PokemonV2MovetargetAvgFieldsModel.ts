import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetAvgFieldsModelBase } from "./PokemonV2MovetargetAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetAvgFieldsModel */
export interface PokemonV2MovetargetAvgFieldsModelType extends Instance<typeof PokemonV2MovetargetAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetAvgFieldsModel */
export { selectFromPokemonV2MovetargetAvgFields, pokemonV2MovetargetAvgFieldsModelPrimitives, PokemonV2MovetargetAvgFieldsModelSelector } from "./PokemonV2MovetargetAvgFieldsModel.base"

/**
 * PokemonV2MovetargetAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovetargetAvgFieldsModel = PokemonV2MovetargetAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

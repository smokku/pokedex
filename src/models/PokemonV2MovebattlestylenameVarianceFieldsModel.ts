import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameVarianceFieldsModelBase } from "./PokemonV2MovebattlestylenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameVarianceFieldsModel */
export interface PokemonV2MovebattlestylenameVarianceFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameVarianceFieldsModel */
export { selectFromPokemonV2MovebattlestylenameVarianceFields, pokemonV2MovebattlestylenameVarianceFieldsModelPrimitives, PokemonV2MovebattlestylenameVarianceFieldsModelSelector } from "./PokemonV2MovebattlestylenameVarianceFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovebattlestylenameVarianceFieldsModel = PokemonV2MovebattlestylenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

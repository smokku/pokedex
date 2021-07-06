import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionVarianceFieldsModelBase } from "./PokemonV2GrowthratedescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionVarianceFieldsModel */
export interface PokemonV2GrowthratedescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionVarianceFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionVarianceFields, pokemonV2GrowthratedescriptionVarianceFieldsModelPrimitives, PokemonV2GrowthratedescriptionVarianceFieldsModelSelector } from "./PokemonV2GrowthratedescriptionVarianceFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2GrowthratedescriptionVarianceFieldsModel = PokemonV2GrowthratedescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

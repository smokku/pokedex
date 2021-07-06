import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectVarianceFieldsModelBase } from "./PokemonV2ItemflingeffectVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectVarianceFieldsModel */
export interface PokemonV2ItemflingeffectVarianceFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectVarianceFieldsModel */
export { selectFromPokemonV2ItemflingeffectVarianceFields, pokemonV2ItemflingeffectVarianceFieldsModelPrimitives, PokemonV2ItemflingeffectVarianceFieldsModelSelector } from "./PokemonV2ItemflingeffectVarianceFieldsModel.base"

/**
 * PokemonV2ItemflingeffectVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemflingeffectVarianceFieldsModel = PokemonV2ItemflingeffectVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

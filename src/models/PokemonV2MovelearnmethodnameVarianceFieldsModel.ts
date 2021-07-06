import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameVarianceFieldsModelBase } from "./PokemonV2MovelearnmethodnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameVarianceFieldsModel */
export interface PokemonV2MovelearnmethodnameVarianceFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameVarianceFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameVarianceFields, pokemonV2MovelearnmethodnameVarianceFieldsModelPrimitives, PokemonV2MovelearnmethodnameVarianceFieldsModelSelector } from "./PokemonV2MovelearnmethodnameVarianceFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovelearnmethodnameVarianceFieldsModel = PokemonV2MovelearnmethodnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
